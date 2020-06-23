import React from "react";
import LessonCardComponent from "./lesson_card_component";
import Aang from '../images/aang.jpg';
import Elements from '../images/elements.jpg';
import Tea from '../images/tea.jpg';
import Feelings from '../images/feelings.png';
import Toph from '../images/toph.png';


class AboutComponent extends React.Component{

    state = {
        lessons: [
            {
                'lesson': 'Sharing tea with a fascinating stranger is one of life\'s delights', 
                'speaker': 'Uncle Iroh',
                'episode': 'S2E8',
                'img': Tea,
            },
            {
                'lesson': 'I thought I was just trying to be strong, but really I was running away from my feelings', 
                'speaker': 'Aang',
                'episode': 'S2E12',
                'img': Feelings
            },
            {
                'lesson': '\"I don\'t care what I look like I\'m not looking for anyone\'s approval, I know who I am.\" \"That\'s what I admire about you toph, you\'re strong...\"', 
                'speaker': 'Toph, Katara',
                'episode': 'S2E15',
                'img': Toph
            },
            {
                'lesson': 'When people lie there\'s a physical reaction', 
                'speaker': 'Toph',
                'episode': 'S2E17',
                'img': Elements
            },
            {
                'lesson': 'See, a little positive attitude goes a long way!', 
                'speaker': 'Sokka',
                'episode': 'S2E18',
                'img': Elements
            },
            {
                'lesson': '\"Toph thinks you give pretty good adivce. And good tea.\" \"The key to both is proper aging.\"', 
                'speaker': 'Aang, Uncle Iroh',
                'episode': 'S2E20',
                'img': Elements
            },
            {
                'lesson': 'Perfection and power are overrated. I think you are very wise to choose happiness and love.', 
                'speaker': 'Uncle Iroh',
                'episode': 'S2E20',
                'img': Elements
            },
            {
                'lesson': 'Sometimes life is like this dark tunnel. You can’t always see the light at the end of the tunnel but if you just keep moving you will come to a better place.', 
                'speaker': 'Uncle Iroh',
                'episode': 'S2E20',
                'img': Elements
            },
            {
                'lesson': 'Dancing is not conducive to a learning environment. Young people must have order and discipline', 
                'speaker': 'Music instructor in the fire nation',
                'episode': 'S3E2',
                'img': Elements
            },
            {
                'lesson': 'Dancing isn’t something you think about. It’s a way to express yourself and no one can ever take that away from you ', 
                'speaker': 'Aang',
                'episode': 'S3E2',
                'img': Elements
            },
            {
                'lesson': 'You can\'t wait around for someone to help you, you have to help yourself', 
                'speaker': 'Katara as she reveals why she disguised as the painted lady',
                'episode': 'S3E3',
                'img': Elements
            },
            {
                'lesson': 'If it\'s from space, it\'s not really earth.', 
                'speaker': 'Katara',
                'episode': 'S3E4',
                'img': Elements
            },
            {
                'lesson': 'Some friendships are so strong, they can even transcend lifetimes.', 
                'speaker': 'Avatar Roku',
                'episode': 'S3E6',
                'img': Elements
            },
            {
                'lesson': 'When love is real, it finds a way.', 
                'speaker': 'Avatar Roku',
                'episode': 'S3E6',
                'img': Elements
            },
            {
                'lesson': 'Everyone is capable of great good and great evil', 
                'speaker': 'Aang',
                'episode': 'S3E6',
                'img': Elements
            },
            {
                'lesson': 'Staying up all night can\'t be good for you', 
                'speaker': 'Katara to Aang',
                'episode': 'S3E9',
                'img': Elements
            },
            {
                'lesson': 'That was just public speaking, and no one is really good at that.', 
                'speaker': 'Aang to Sokka',
                'episode': 'S3E10',
                'img': Elements
            },
            {
                'lesson': 'No one can give you your honor, it’s something you earn yourself by learning to do what’s right.', 
                'speaker': 'Zuko',
                'episode': 'S3E12',
                'img': Elements
            },
            {
                'lesson': 'Destiny is a funny thing. You never know how things are going to work out but if you keep an open mind and open heart I promise you will find your own destiny one day.', 
                'speaker': 'Uncle Iroh',
                'episode': 'S3E12',
                'img': Elements
            },
            {
                'lesson': 'The past can be a great teacher.', 
                'speaker': 'Aang',
                'episode': 'S3E13',
                'img': Elements
            },
            {
                'lesson': 'People don’t make traps unless they have something worth protecting.', 
                'speaker': 'Zuko',
                'episode': 'S3E13',
                'img': Elements
            },
            {
                'lesson': 'Fire is energy and life.', 
                'speaker': 'Aang, when he realizes the meaning of firebending',
                'episode': 'S3E13',
                'img': Elements
            },
            {
                'lesson': 'Sometimes clouds have two sides, a dark and light and silver between. So sometimes when life seems hard take a bite of the silver sandwich', 
                'speaker': 'Zuko, saying \"what uncle would say\"',
                'episode': 'S3E14',
                'img': Elements
            },
            {
                'lesson': '“Hey watch who you’re shoving!” “I think you mean watch WHOM you’re shoving”', 
                'speaker': 'Zuko, Prisoner at boiling rock correcting him with the GRAMMAR lesson for the kiddos',
                'episode': 'S3E14',
                'img': Elements
            },
            {
                'lesson': 'Even though you’ll probably fail over and over again you have to try.', 
                'speaker': 'Zuko',
                'episode': 'S3E15',
                'img': Elements
            },
            {
                'lesson': 'The monks used to say that revenge is like a two-headed ratviper. While you watch your enemy go down you’re being poisoned yourself...It’s easy to do nothing, but it’s hard to forgive.', 
                'speaker': 'Aang',
                'episode': 'S3E16',
                'img': Elements
            },
            {
                'lesson': 'forgiveness is the first step you have to take to begin healing.', 
                'speaker': 'Aang',
                'episode': 'S3E16',
                'img': Elements
            },
            {
                'lesson': '“You were right about what Katara needed, violence wasn’t the answer.” “It never is.” ', 
                'speaker': 'Zuko, Aang',
                'episode': 'S3E16',
                'img': Elements
            },
            {
                'lesson': 'Being part of the group means being part of group hugs too.', 
                'speaker': 'Katara to Zuko',
                'episode': 'S3E18',
                'img': Elements
            },

        ]
    }

    render() {
        return (
            <div id="lessons" className="container">
            { <div className="row">
                {
                    this.state.lessons.map(lesson =>
                        <div className="col-sm-4 py-5"  key={lesson.id}>
                            <LessonCardComponent
                                lesson={lesson}/>
                        </div>
                    )
                }
            </div> 
            }
            </div>
        )
    }
}
    
export default AboutComponent