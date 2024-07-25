import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUpIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { RegisterFormT } from '../../hooks/schema.register';
import { useTranslation } from 'react-i18next';

const maxSize = 20 * 1024 * 1024; // 20 MB in bytes

function sizeValidator(file: any) {
  if (file.size > maxSize) {
    return {
      code: 'size-too-large',
      message: `File size exceeds ${maxSize / (1024 * 1024)} MB`,
    };
  }
  return null;
}

interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined>;
  // name: "film_prj_video" | "tech_prj_video";
  // tech_prj_youtube_url
  name: 'film_prj_youtube_url' | 'tech_prj_youtube_url';
}

function UploadVideo({ form, name }: Props) {
  const onDrop = useCallback(
    (droppedFiles: any) => {
      form.setValue(name, droppedFiles, {
        shouldValidate: true,
      });
    },
    [form, name]
  );
  const { t } = useTranslation();

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      onDrop,
      validator: sizeValidator,
      accept: {
        'video/*': [],
        // 'video/mp4': ['.mp4'],
        // 'video/x-msvideo': ['.avi'], // 'video/avi' MIME type is video/x-msvideo
        // 'video/quicktime': ['.mov'], // Added support for .mov files
      },
    });

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(
    ({ file, errors }: { file: any; errors: any }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((error: any) => (
            <li className='text-red-700' key={error.code}>
              {error.message}
            </li>
          ))}
        </ul>
      </li>
    )
  );

  return (
    <div>
      <div className='border border-dashed border-primary rounded-[9px] p-[20px] bg-primary-extralight'>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <FileUpIcon
            className='inline mb-2'
            size={60}
            strokeWidth={1}
            fill='#F0B441'
            color='#fff'
          />
          <h4 className='text-grey-normal text-[16px] mb-2.5'>
            {t('Drag_and_drop_to_upload_video')}
          </h4>
          <p className='text-grey-normal text-[13px] leading-none'>
            {t('Upload_size_up_to_20_MB')}
          </p>
          <p className='text-grey-normal text-[13px] leading-none'>
            {t('Supported_formats_MP4_AVI')}
          </p>
        </div>
        <div>
          <ul>{acceptedFileItems}</ul>
          <ul>{fileRejectionItems}</ul>
        </div>
      </div>

      {form?.formState?.errors[name]?.message && (
        <p className={cn('text-sm font-medium text-destructive mt-1')}>
          {form?.formState?.errors[name]?.message as any}
        </p>
      )}
    </div>
  );
}

export default UploadVideo;
