import Video from './Video'
import Article from './Article'
import withPopular from './withPopular'
import withNew from './withNew'

export default function List(props) {
    const VideoWithPopular = withPopular(Video);
    const ArticleWithNew = withNew(Article);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithPopular {...item} />
                );
  
            case 'article':
                return (
                    <ArticleWithNew {...item} />
                );
        }
    });
};