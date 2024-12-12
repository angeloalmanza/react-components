import style from './PostCard.module.css';
import InfoButton from './InfoButton';

const PostCard = () => {
    return (
        <div className={style.card}>
            {/* Card Image */}
            <div className={style.image}>
              <img src="/img/ciambellone.jpeg" alt=""/>
            </div>
            {/* Card content */}
            <div className={style.content}>
              <h5>Titolo del post</h5>
              <p className='mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, minima! Hic, beatae reprehenderit quidem, iure molestiae deleniti expedita accusantium sed dolore delectus et pariatur repudiandae fuga ipsum veniam minima quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <InfoButton />
            </div>
        </div>
    );
}

export default PostCard;