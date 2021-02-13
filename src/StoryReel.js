import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image='https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp'  title='Harry Potter' />
            <Story image='https://prodimage.images-bn.com/pimages/9780066238500_p0_v1_s550x406.jpg'  title='Narnia' />
            <Story image='https://prodimage.images-bn.com/pimages/9780358380238_p0_v2_s550x406.jpg'  title='Lord of the Rings' />
            <Story image='https://images.penguinrandomhouse.com/cover/9780141332499'  title='Shelock Holmes' />
            <Story image='https://images.penguinrandomhouse.com/cover/9780345445605'  title='Hobbit' />

        </div>
    )
}

export default StoryReel;
