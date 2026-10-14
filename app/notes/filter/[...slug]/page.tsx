//import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
//import { fetchNotes } from '../../../../lib/api';
import Notes from './Notes.client';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}
export const instant = false;
  
export default async function NotesPage({ params }: PageProps) {
  const resolveParams = await params;
  const slug = resolveParams?.slug || [];

  const tag = slug[0] || ''; 

 // const queryClient = new QueryClient();

 // await queryClient.prefetchQuery({
 //   queryKey: ['notes', { page: 1, search: '', tag }] as const,
 //   queryFn: () => fetchNotes('', 1, tag),
 // });
  return (
    //<HydrationBoundary state={dehydrate(queryClient)}>
      <Notes tag={tag} key={tag} />
  //</HydrationBoundary>
  );
}


