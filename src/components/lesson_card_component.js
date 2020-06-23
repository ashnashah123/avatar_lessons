import React from "react";
import Aang from '../images/aang.jpg';


const LessonCardComponent = ({lesson}) =>
    <div>
        <div class="card" style={{width: '18rem'}}>
            <img className="w-100 rounded" src={lesson.img} class="card-img-top"/>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{lesson.lesson}</p>
                    <footer class="blockquote-footer">{lesson.speaker}<cite title="Source Title"> {lesson.episode}</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>

export default LessonCardComponent