import React from "react";
import LessonCardComponent from "./lesson_card_component";
import Aang from '../images/aang.jpg';
import Elements from '../images/elements.jpg';


class AboutComponent extends React.Component{

    state = {
        lessons: [
            {
                'lesson': 'Sharing tea with a fascinating stranger is one of life\'s delights', 
                'speaker': 'Uncle Iroh',
                'episode': 'S2E8',
                'img': Aang,
            },
            {
                'lesson': 'I thought I was just trying to be strong, but really I was running away from my feelings', 
                'speaker': 'Aang',
                'episode': 'S2E12',
                'img': Elements
            },
            {
                'lesson': '\"I don\'t care what I look like I\'m not looking for anyone\'s approval, I know who I am.\" \"That\'s what I admire about you toph, you\'re strong...\"', 
                'speaker': 'Toph & Katara',
                'episode': 'S2E15',
                'img': Elements
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
                'episode': 'S2E17',
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