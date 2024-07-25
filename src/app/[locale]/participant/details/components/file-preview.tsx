import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/card';

const FilePreview = ({ file }: { file: string | null | undefined }) => {
  return (
    <Card className='px-4 py-3 h-max flex items-center justify-between w-full'>
      <div className='flex items-center gap-3'>
        {file?.includes('pdf') ? <Icons.filePdfIcon /> : <Icons.pptxIcon />}

        {file && (
          <a
            href={file}
            target='_blank'
            rel='noreferrer'
            className='hover:underline underline-offset-2'
          >
            {file?.includes('pdf') ? 'file.pdf' : 'file.docx'}
          </a>
        )}
      </div>
      {file && (
        <a href={file} target='_blank' rel='noreferrer'>
          <Icons.fileDownloadIcon />
        </a>
      )}
    </Card>
  );
};

export default FilePreview;
