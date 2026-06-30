-- ============================================================
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- Safe to re-run — uses IF NOT EXISTS / DROP IF EXISTS
-- ============================================================

-- 1. Create the projects table (skip if already exists)
create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  type        text not null,
  description text not null,
  status      text not null check (status in ('Completed', 'Ongoing')),
  images      text[] not null default '{}',
  created_at  timestamptz not null default now()
);

-- 2. Enable Row Level Security
alter table public.projects enable row level security;

-- 3. Drop old policies first so re-running never errors
drop policy if exists "Public read access" on public.projects;
drop policy if exists "Admin write access" on public.projects;

-- 4. Re-create policies
-- Anyone (anon key) can read.
create policy "Public read access"
  on public.projects for select using (true);

-- Only authenticated Supabase users (i.e. someone who signed in via
-- supabase.auth.signInWithPassword on /editprojects) can write.
-- Create the admin user in Supabase Dashboard -> Authentication -> Users -> Add user.
create policy "Authenticated write access"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================================
-- 6. Storage bucket for project images uploaded from /editprojects
-- ============================================================

-- Create a public bucket named "project-images" (skip if it already exists)
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

-- Drop old policies first so re-running never errors
drop policy if exists "Public read project images" on storage.objects;
drop policy if exists "Authenticated upload project images" on storage.objects;
drop policy if exists "Authenticated update project images" on storage.objects;
drop policy if exists "Authenticated delete project images" on storage.objects;

-- Anyone can view/download images (needed for the public Projects page).
create policy "Public read project images"
  on storage.objects for select
  using (bucket_id = 'project-images');

-- Only authenticated users (signed in via /editprojects) can upload/replace/delete.
create policy "Authenticated upload project images"
  on storage.objects for insert
  with check (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "Authenticated update project images"
  on storage.objects for update
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "Authenticated delete project images"
  on storage.objects for delete
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');

-- 5. Seed the 3 existing projects (only if table is empty)
insert into public.projects (name, type, description, status, images)
select * from (values
  (
    'Supreme Delicious Food – Bangalore',
    'Industrial Roofing & Cladding',
    'This project involves supplying and installing high-performance metal roofing sheets and composite roof panels for Supreme Delicious Food''s industrial facility in Bangalore. Our team ensures expert execution with high-quality materials for durable, long-lasting results.',
    'Completed',
    array[
      '/lovable-uploads/c7625350-d813-4a22-b2cc-f99ce7d06719.png',
      '/lovable-uploads/1e8f60af-95bf-46e5-9783-50d349946221.png',
      '/lovable-uploads/7dad9ed9-4a26-47a4-a2f1-c1287678d1c7.png',
      '/lovable-uploads/6ca571d5-c799-4fa8-8169-3ce963e3a4e5.png',
      '/lovable-uploads/0057516a-d04e-4ced-a3ba-d2f6c5a8244a.png',
      '/lovable-uploads/c6b29714-a04a-4bab-a06f-18380bff88b7.png'
    ]
  ),
  (
    'ALPS ENGINEERING',
    'KUMHO ENGINEERING – Oragadam',
    'This project for ALPS ENGINEERING involved delivering precision-engineered metal roofing and composite roof panels for KUMHO ENGINEERING''s facility in Oragadam. Our expert team managed the supply and installation, ensuring high-quality execution with durable materials.',
    'Completed',
    array[
      '/lovable-uploads/cc7971aa-2563-40a8-8741-3a78c54eb277.png',
      '/lovable-uploads/26023ff9-15da-4b15-827c-f373ba37954d.png',
      '/lovable-uploads/0f47bc28-db9c-464b-8629-ca82647e78ea.png',
      '/lovable-uploads/ec4c6bc0-fb93-4889-92f3-67044b1d3992.png',
      '/lovable-uploads/16d9f8b6-5602-4779-93d9-b58c60effbd0.png',
      '/lovable-uploads/4313d84a-2eb7-4b79-b64f-613301ac336f.png'
    ]
  ),
  (
    'ALPS ENGINEERING',
    'ALPS ENGINEERING – Pallavaram',
    'Ongoing project for ALPS ENGINEERING in Pallavaram involving supply and installation of premium metal roofing and composite panels, executed with our trusted quality and expert team.',
    'Ongoing',
    array[
      '/lovable-uploads/3e3a0818-0bc5-4951-b166-835f34a24b20.png',
      '/lovable-uploads/5b91c45d-196c-4db2-ae51-e305fdf72978.png',
      '/lovable-uploads/99d7ca72-2f5f-4e5e-88f9-609b6bc38d1b.png',
      '/lovable-uploads/8df670cc-a127-4386-b70c-698b1190984b.png',
      '/lovable-uploads/8a4ec136-9030-4f34-9d76-a9926dc23057.png'
    ]
  )
) as v(name, type, description, status, images)
where not exists (select 1 from public.projects limit 1);
