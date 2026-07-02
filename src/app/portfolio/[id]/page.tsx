import PortfolioDetail from '../../../page-components/PortfolioDetail';

export default async function Page({ params }: PageProps<'/portfolio/[id]'>) {
  const resolvedParams = await params;
  const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id;

  return <PortfolioDetail params={{ id: id ?? '1' }} />;
}
