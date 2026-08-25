import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'info';
  onClose?: () => void;
}

export function Toast({ title, description, variant = 'default', onClose }: ToastProps) {
  const variants = {
    default: 'bg-white border-gray-200',
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
  };

  const icons = {
    default: null,
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
    info: <Info className="h-5 w-5 text-blue-600" />,
  };

  return (
    <div className={cn('border rounded-lg p-4 shadow-lg flex gap-3 items-start', variants[variant])}>
      {icons[variant]}
      <div className="flex-1">
        {title && <h4 className="font-semibold text-sm">{title}</h4>}
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      {onClose && (
        <button onClick={onClose}>
          <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
}
