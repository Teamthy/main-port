import BlogDetail from '../../../page-components/BlogDetail';

export default async function Page({ params }: PageProps<'/blog/[id]'>) {
  const resolvedParams = await params;
  const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id;

  return <BlogDetail params={{ id: id ?? '1' }} />;
}
