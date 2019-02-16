import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const OurOverviewTile =({data, template})=> {

const additionalClass = template? 'template': null
        return(
            <React.Fragment>
                <div  className='O-O-tile'>
            <h1 className="O-O-collumn-heading">{data.title}</h1>
                <Donut
                donutType={donutType.gender}
                donutName={`gender-${data.uuid}`}
                className="O-O-donut"
                radius = {30}
                data={data.gender}
                template={template}
                padAngle={0.03}

                ></Donut>
                 <Donut
                donutType={donutType.race}
                donutName={`race-${data.uuid}`}
                className="O-O-donut"
                radius = {30}
                data={data.race}
                template={template}
                padAngle={0.03}


                ></Donut>
                </div>
            </React.Fragment>

        )
    
}