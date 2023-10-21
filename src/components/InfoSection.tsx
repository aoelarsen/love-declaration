
import { daysGone, monthsGone, yearsGone } from './hearts';

const InfoSection = () => {
 return (
    <section class='py-2 basis-3/5 w-full h-full grid bg-rose-200 text-rose-900'>
        <h2 class='self-center text-center uppercase text-3xl md:text-6xl font-bold'>
            Kjære kjærestekona mi
        </h2>
        <ul class='py-2 justify-self-center text-lg md:text-xl lg:text-3xl'>
            <li>
                Nå har vi vært gift i <span class='gradient-text'>{daysGone}</span> dager!
            </li>
            <li>
                Vi har vært gift i <span class='gradient-text'>{monthsGone}</span> måneder!
            </li>
            <li>Vi har vært gift i <span class='gradient-text'>{yearsGone}</span> år!</li>
        </ul>
        <div class='pb-4 text-4xl font-bold justify-self-center self-center'>
            <svg width='75' height='75' stroke='firebrick'>
                <circle
                    cx='37.5'
                    cy='37.5'
                    r='26.25'                
                    stroke-width='0.75'
                    stroke='firebrick'
                    fill='none'></circle>
                <path
                    d='M 37.5 48.75 L 26.25 37.5 L 30 37.5 L 30 30 L 45 30 L 45 37.5 L 48.75 37.5 Z'
                    fill='firebrick'
                    stroke='firebrick'></path>
            </svg>
        </div>
    </section>

 )
}

export default InfoSection;