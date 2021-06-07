import { React } from "react";
import JumbotronContainerWrapper from '../containers/jumbotron';
import AccordionWrapper from '../containers/accordion';
import FooterWrapper from '../containers/footer';
import HeaderWrapper from '../containers/header';
import HeaderContentWrapper from '../containers/header/content';

export default function Home() {
    return (
        <>
            <HeaderWrapper loginOption={true} />
            <HeaderContentWrapper /> 
            <JumbotronContainerWrapper />
            <AccordionWrapper />
            <FooterWrapper />
        </>
    )
}