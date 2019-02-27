import * as React from 'react';
import { Donut, donutType } from '../YourOverview/Donut';


export class OurHiresTile extends React.Component<any, any>{
    constructor(props){
        super(props)

    }
    render(){
        const radius = 70 
        const diameter = radius * 2
        const width = diameter * 2
        const height = radius * 3
        return(
            <React.Fragment>
            <h1 className="sub-heading O-H-vertical-sub-heading">{this.props.title}</h1>
            <div className="O-H-tile">

        {/* APPLICATION DONUT */}
            <Donut donutType={donutType.gender}
            donutName={`${this.props.techType}${this.props.data.date}-applications`}
            radius={radius}
            data={this.props.data.applications}
            template={false}
            padAngle={0.03}
            className="small-donut"
            width = {width}
            height = {height}
            >   </Donut>
        {/* APPLICATION TARGET DONUT */}
            <Donut donutType={donutType.gender}
                donutName={`two`}
                radius={100}
                data={{
                    Men: 12, Women: 6
                }}
                template={false}
                className="big-donut"
                target={true}
                padAngle={0}
                width = {300}
                height = {300}
                /> 

        {/* HIRE DONUT */}
            <Donut donutType={donutType.gender}
            donutName={`${this.props.techType}${this.props.data.date}-hired`}
            radius={radius}
            data={this.props.data.hired}
            template={false}
            padAngle={0.03}
            width = {width}
            height = {height}
            
            >
            
            </Donut>


            
            </div>
            </React.Fragment>
        )
    }
}

