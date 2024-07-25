import { cn } from '@/lib/utils';
import { FileUpIcon } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UseFormReturn } from 'react-hook-form';
import { RegisterFormT } from '../../hooks/schema.register';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { FormMessage } from '@/components/ui/form';

const maxSize = 30 * 1024 * 1024; // 30 MB in bytes

function sizeValidator(file: File) {
  if (file.size > maxSize) {
    return {
      code: 'size-too-large',
      message: `File size exceeds ${maxSize / (1024 * 1024)} MB`,
    };
  }
  return null;
}

interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined> | any;
  name: 'film_prj_document' | 'tech_prj_document';
}

function UploadDoc({ form, name }: Props) {
  const { t } = useTranslation();
  const { locale } = useParams();

  const onDrop = useCallback(
    (droppedFiles: any) => {
      form.setValue(name, droppedFiles, {
        shouldValidate: true,
      });
    },
    [form, name]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      validator: sizeValidator,
      onDrop,
      accept: {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.presentationml.presentation':
          ['.pptx'],
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
            {t('Drag_and_drop_to_upload_Presentation')}
          </h4>
          <p className='text-grey-normal text-[13px] leading-none'>
            {t('Upload_size_upto_30_MB')}
          </p>
          <p className='text-grey-normal text-[13px] leading-none'>
            {t('Supported_format_PDF_PPTX')}
          </p>
        </div>
        <div>
          <ul>{acceptedFileItems}</ul>
          <ul>{fileRejectionItems}</ul>
        </div>
      </div>
      {form?.formState?.errors[name]?.message && (
        <FormMessage>
          {form?.formState?.errors[name]?.message as any}
        </FormMessage>
      )}
    </div>
  );
}

export default UploadDoc;
