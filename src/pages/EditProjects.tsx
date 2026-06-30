import { useState, useEffect } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Lock, Plus, Pencil, Trash2, X, Save, Loader2, AlertCircle,
  ImagePlus, CheckCircle2, LogOut
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { Project, ProjectInsert } from '@/types/project';

// ─── Login Gate (Supabase Auth) ────────────────────────────────────────────────
const LoginGate = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) setError(err.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-sm border border-gray-200 shadow-xl">
        <CardHeader className="text-center pb-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#11a9df]/10 mx-auto mb-3">
            <Lock className="h-7 w-7 text-[#11a9df]" />
          </div>
          <CardTitle className="text-2xl text-gray-900">Developer Access</CardTitle>
          <p className="text-gray-500 text-sm mt-1">Sign in to manage projects</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null); }}
              placeholder="Email"
              autoFocus
              autoComplete="username"
              className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#11a9df]/40 transition-colors border-gray-300"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(null); }}
              placeholder="Password"
              autoComplete="current-password"
              className={`w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#11a9df]/40 transition-colors ${
                error ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
            />
            {error && (
              <p className="flex items-center gap-1.5 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" /> {error}
              </p>
            )}
            <Button type="submit" className="w-full bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// ─── Project Form ─────────────────────────────────────────────────────────────
const IMAGE_BUCKET = 'project-images';
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB

const uploadProjectImage = async (file: File): Promise<string> => {
  if (!file.type.startsWith('image/')) throw new Error('Only image files are allowed');
  if (file.size > MAX_IMAGE_BYTES) throw new Error('Image must be under 5MB');

  const ext = file.name.split('.').pop() || 'jpg';
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error: uploadErr } = await supabase.storage
    .from(IMAGE_BUCKET)
    .upload(path, file, { cacheControl: '3600', upsert: false });
  if (uploadErr) throw uploadErr;

  const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

const emptyForm = (): ProjectInsert => ({
  name: '',
  type: '',
  description: '',
  status: 'Completed',
  images: [],
});

interface ProjectFormProps {
  initial?: Project;
  onSave: (data: ProjectInsert) => Promise<void>;
  onCancel: () => void;
  saving: boolean;
}

const ProjectForm = ({ initial, onSave, onCancel, saving }: ProjectFormProps) => {
  const [form, setForm] = useState<ProjectInsert>(
    initial
      ? { name: initial.name, type: initial.type, description: initial.description, status: initial.status, images: initial.images }
      : emptyForm()
  );
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectInsert, string>>>({});
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const set = (field: keyof ProjectInsert, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const removeImage = (i: number) =>
    setForm(prev => ({ ...prev, images: prev.images.filter((_, idx) => idx !== i) }));

  const handleFilesSelected = async (files: FileList | null) => {
    if (!files || !files.length) return;
    setUploadError(null);
    setUploading(true);
    try {
      const urls = await Promise.all(Array.from(files).map(uploadProjectImage));
      setForm(prev => ({ ...prev, images: [...prev.images, ...urls] }));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Project name is required';
    if (!form.type.trim()) e.type = 'Project type is required';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.images.length) e.images = 'At least one image is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await onSave(form);
  };

  const inputClass = (field: keyof ProjectInsert) =>
    `w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#11a9df]/40 transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Project Name *</label>
        <input
          className={inputClass('name')}
          value={form.name}
          onChange={e => set('name', e.target.value)}
          placeholder="e.g. Supreme Delicious Food – Bangalore"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type *</label>
        <input
          className={inputClass('type')}
          value={form.type}
          onChange={e => set('type', e.target.value)}
          placeholder="e.g. Industrial Roofing & Cladding"
        />
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Description *</label>
        <textarea
          className={inputClass('description') + ' min-h-[100px] resize-y'}
          value={form.description}
          onChange={e => set('description', e.target.value)}
          placeholder="Describe the project scope, materials, and outcomes..."
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Status *</label>
        <select
          className={inputClass('status')}
          value={form.status}
          onChange={e => set('status', e.target.value as 'Completed' | 'Ongoing')}
        >
          <option value="Completed">Completed</option>
          <option value="Ongoing">Ongoing</option>
        </select>
      </div>

      {/* Images */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Project Images *</label>
        <div className="flex flex-wrap gap-3">
          {form.images.map((url, i) => (
            <div key={url + i} className="relative h-24 w-32 rounded-lg overflow-hidden border border-gray-200 group flex-shrink-0">
              <img src={url} alt={`Image ${i + 1}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}

          <label className={`h-24 w-32 flex-shrink-0 flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed text-gray-400 transition-colors ${
            uploading ? 'border-gray-200 cursor-wait' : 'border-gray-300 hover:border-[#11a9df] hover:text-[#11a9df] cursor-pointer'
          }`}>
            {uploading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <ImagePlus className="h-5 w-5" />
                <span className="text-xs font-medium">Upload</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              disabled={uploading}
              onChange={e => { handleFilesSelected(e.target.files); e.target.value = ''; }}
            />
          </label>
        </div>
        {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images}</p>}
        {uploadError && (
          <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
            <AlertCircle className="h-3.5 w-3.5" /> {uploadError}
          </p>
        )}
        <p className="text-xs text-gray-400 mt-2">
          Upload photos from your device (JPG/PNG, max 5MB each) — stored in Supabase Storage.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Button
          type="submit"
          className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold gap-2"
          disabled={saving}
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {initial ? 'Save Changes' : 'Add Project'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

// ─── Delete Confirm ───────────────────────────────────────────────────────────
const DeleteConfirm = ({ name, onConfirm, onCancel, deleting }: {
  name: string;
  onConfirm: () => void;
  onCancel: () => void;
  deleting: boolean;
}) => (
  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
    <p className="text-gray-800 font-medium mb-4">
      Delete <span className="text-red-600 font-bold">"{name}"</span>? This action cannot be undone.
    </p>
    <div className="flex gap-3">
      <Button
        size="sm"
        className="bg-red-600 hover:bg-red-700 text-white font-bold gap-2"
        onClick={onConfirm}
        disabled={deleting}
      >
        {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
        Delete
      </Button>
      <Button size="sm" variant="outline" onClick={onCancel} disabled={deleting}>
        Cancel
      </Button>
    </div>
  </div>
);

// ─── Main Admin Panel ─────────────────────────────────────────────────────────
const AdminPanel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (err) {
      const msg = err.message || JSON.stringify(err);
      if (msg.includes('NOT_FOUND') || String(err.code) === '404') {
        setError('Supabase project is paused or the "projects" table does not exist. Go to supabase.com → your project → Resume, then run supabase_setup.sql.');
      } else {
        setError(`Supabase error: ${msg} (code: ${err.code})`);
      }
    } else {
      setProjects(data as Project[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleAdd = async (data: ProjectInsert) => {
    setSavingId('new');
    const { error: err } = await supabase.from('projects').insert([data]);
    setSavingId(null);
    if (err) {
      showToast('Failed to add project: ' + err.message, 'error');
    } else {
      showToast('Project added successfully!');
      setShowAddForm(false);
      fetchProjects();
    }
  };

  const handleEdit = async (id: string, data: ProjectInsert) => {
    setSavingId(id);
    const { error: err } = await supabase.from('projects').update(data).eq('id', id);
    setSavingId(null);
    if (err) {
      showToast('Failed to update project: ' + err.message, 'error');
    } else {
      showToast('Project updated successfully!');
      setEditingId(null);
      fetchProjects();
    }
  };

  const handleDelete = async (id: string) => {
    setSavingId(id);
    const { error: err } = await supabase.from('projects').delete().eq('id', id);
    setSavingId(null);
    if (err) {
      showToast('Failed to delete project: ' + err.message, 'error');
    } else {
      showToast('Project deleted.');
      setDeletingId(null);
      fetchProjects();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Project Manager</h1>
            <p className="text-sm text-gray-500">Developer portal — changes reflect on the public site immediately</p>
          </div>
          <div className="flex items-center gap-3">
            {!loading && (
              <span className="text-sm text-gray-500 font-medium">
                {projects.length} project{projects.length !== 1 ? 's' : ''}
              </span>
            )}
            <Button
              className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold gap-2"
              onClick={() => { setShowAddForm(true); setEditingId(null); }}
              disabled={showAddForm}
            >
              <Plus className="h-4 w-4" /> Add Project
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-gray-300 text-gray-500 hover:border-red-400 hover:text-red-500"
              onClick={() => supabase.auth.signOut()}
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all ${
          toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {toast.type === 'success'
            ? <CheckCircle2 className="h-4 w-4" />
            : <AlertCircle className="h-4 w-4" />
          }
          {toast.msg}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 space-y-6 max-w-4xl">
        {/* Add form */}
        {showAddForm && (
          <Card className="border-2 border-[#11a9df]/30 shadow-md">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                <Plus className="h-5 w-5 text-[#11a9df]" /> New Project
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ProjectForm
                onSave={handleAdd}
                onCancel={() => setShowAddForm(false)}
                saving={savingId === 'new'}
              />
            </CardContent>
          </Card>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#11a9df]" />
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl p-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{error}</span>
            <Button size="sm" variant="outline" className="ml-auto" onClick={fetchProjects}>Retry</Button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && !showAddForm && (
          <div className="text-center py-20 text-gray-400">
            <p className="mb-4">No projects yet.</p>
            <Button
              className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold gap-2"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-4 w-4" /> Add Your First Project
            </Button>
          </div>
        )}

        {/* Project cards */}
        {!loading && !error && projects.map((project) => (
          <Card key={project.id} className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg text-gray-900 truncate">{project.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <Badge className="bg-[#11a9df]/10 text-[#11a9df] border border-[#11a9df]/20 text-xs font-medium">
                      {project.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={project.status === 'Completed'
                        ? 'border-green-500 text-green-700 bg-green-50 text-xs'
                        : 'border-orange-500 text-orange-700 bg-orange-50 text-xs'
                      }
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {new Date(project.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 border-gray-300 hover:border-[#11a9df] hover:text-[#11a9df]"
                    onClick={() => {
                      setEditingId(editingId === project.id ? null : project.id);
                      setDeletingId(null);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 border-gray-300 hover:border-red-400 hover:text-red-500"
                    onClick={() => {
                      setDeletingId(deletingId === project.id ? null : project.id);
                      setEditingId(null);
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </Button>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.description}</p>

              {/* Image thumbnails preview */}
              {project.images?.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.images.slice(0, 6).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Preview ${i + 1}`}
                      className="h-12 w-20 object-cover rounded border border-gray-200"
                    />
                  ))}
                  {project.images.length > 6 && (
                    <div className="h-12 w-20 rounded border border-gray-200 bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-medium">
                      +{project.images.length - 6} more
                    </div>
                  )}
                </div>
              )}
            </CardHeader>

            {/* Edit form inline */}
            {editingId === project.id && (
              <CardContent className="border-t border-gray-100 pt-5">
                <ProjectForm
                  initial={project}
                  onSave={(data) => handleEdit(project.id, data)}
                  onCancel={() => setEditingId(null)}
                  saving={savingId === project.id}
                />
              </CardContent>
            )}

            {/* Delete confirm */}
            {deletingId === project.id && (
              <CardContent className="pt-0">
                <DeleteConfirm
                  name={project.name}
                  onConfirm={() => handleDelete(project.id)}
                  onCancel={() => setDeletingId(null)}
                  deleting={savingId === project.id}
                />
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── Root Export ──────────────────────────────────────────────────────────────
const EditProjects = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-[#11a9df]" />
      </div>
    );
  }

  if (!session) {
    return <LoginGate />;
  }
  return <AdminPanel />;
};

export default EditProjects;
