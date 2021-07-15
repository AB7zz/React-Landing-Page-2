import React from 'react';
import Icon1 from'../../images/svg-1.svg';
import Icon2 from'../../images/svg-2.svg';
import Icon3 from'../../images/svg-3.svg'
import { FaArrowRight } from 'react-icons/fa';

import {ServicesH1, ServiceLearn,ServiceLearn2,ServiceLearn3, ServicesH3 ,ServiceContainer, ServiceCards, ServiceCard, ServicesIcon,ServicesIcon2,ServicesIcon3, ServiceTitle,ServiceTitle2, ServiceDetails} from './ServicesElements'
const Service = () => {
    return (
        <ServiceContainer>
            <ServicesH1><b>Experience new features every month</b></ServicesH1>
            <ServicesH3><b>Over 12+ updates a year</b></ServicesH3>
            <ServiceCards>
                <div className="scale">
                    <ServiceCard className="floating1">
                            <ServiceTitle>
                            Software Information
                            </ServiceTitle>
                            <ServiceDetails>
                            Here at Nairo Optics we beleive in taking care of our software as much as our hardware. We use the latest technologies available in the industry and update the same as per the mobile updates.
                            </ServiceDetails>
                            <ServiceLearn>
                            Learn More <FaArrowRight/>
                        </ServiceLearn>
                    </ServiceCard>
                </div>
                <div className="scale">
                    <ServiceCard className="floating2">
                        <ServiceTitle>
                            Hardware Information
                        </ServiceTitle>
                        <ServiceDetails>
                        We use some of the finest materials for our contact lenses, frame lenses and frame. Our high quality raw materials including sillicon are manufactured in our own factories in the United States.
                        </ServiceDetails>
                        <ServiceLearn2>
                            Learn More <FaArrowRight/>
                        </ServiceLearn2>
                    </ServiceCard>
                </div>
                <div className="scale">
                    <ServiceCard className="floating3">
                        <ServiceTitle2>
                         Product Like no Other
                        </ServiceTitle2>
                        <ServiceDetails>
                        We believe in innovtion of eyeware. Our mission are Nairo Eyeware Techonologies is to disrupt the industry by providing cutting edge innovative technology, and thus we own over 230 patents.
                        </ServiceDetails>
                        <ServiceLearn3>
                            Learn More <FaArrowRight/>
                        </ServiceLearn3>
                    </ServiceCard>
                </div>
            </ServiceCards>
        </ServiceContainer>
    )
}

export default Service


