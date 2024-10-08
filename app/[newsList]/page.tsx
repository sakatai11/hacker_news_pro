import Title from '../_components/elements/title/Index';
import * as NewsList from '@/features/newsList/components/Index';
import { PAGE_SIZE } from '../_constants/data';
import { getNews } from '../_libs/apis';

type Props = {
  params: { newsList: string };
};

export default async function Page({ params }: Props) {
  const newsList = params.newsList;

  const res = await getNews({ params: newsList === '/' ? '' : newsList });
  // console.log('Data:', data.articles);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Title
        text={
          params.newsList === '/'
            ? 'Top'
            : capitalizeFirstLetter(params.newsList)
        }
      />
      <NewsList.NewsListWrapper articleList={res} pageSize={PAGE_SIZE} />
    </>
  );
}
