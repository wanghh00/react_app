// import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import KeywordsGroup from './components/KeywordsBox';
import TargetGroup from './components/TargetGroup';
import PlacementAutoBox from './components/PlacementAutoBox';

import { PlacementsId, SegmentationId, FactorNameId, TreatmentNameId } from './Util';

import top100Films from './data/top100Films.json'

function App() {
    const [value, setValue] = useState(null);

    const [keywordsValue, setKeywordsValue] = useState([]);
    const [placementsValue, setPlacementsValue] = useState([]);
    const [factorName, setFactorName] = useState('ALGO.OVERRIDE.')

    const [targetGroupElements, setTargetGroupElements] = useState([PlacementsId])

    const handleKeywordsGroupChange = ({ id, value, reason }) => {
        console.log('KeywordsGroupChange hehe', id, value, reason);
        setValue("haha " + value.length);

        let elementsSet = new Set(targetGroupElements.slice());
        let changed = 0;

        if (id && id == TreatmentNameId) {
            setFactorName('ALGO.OVERRIDE.' + value.replaceAll(' ', '_'));
            return
        }

        if (value && value.length >= 2) {
            if (!elementsSet.has(SegmentationId)) {
                elementsSet.add(SegmentationId);
                changed = 1;
                console.log('1111', changed);
            }
            // setTargetGroupElements(targetGroupElementsNew);
        } else {
            if (elementsSet.has(SegmentationId)) {
                elementsSet.delete(SegmentationId);
                changed = 1;
                console.log('2222', changed);
            }
        }
        if (changed > 0) {
            setTargetGroupElements(Array.from(elementsSet));
            console.log('setTargetGroupElements Called');
        }
    }

    //   const notifyKeywordsGroupChange = (event, newValue) => {
    //     setSelectedColors(newValue);
    // };

    // return (
    //   <div className="App">
    //     <div className='keywordGroup'>
    //       <div>Keywords</div>
    //     </div>
    //     <div className='group1'>
    //       <div>Group1</div>
    //     </div>
    //   </div>
    // );

    const placementAutoBox = <PlacementAutoBox
        value={placementsValue}
        setValue={setPlacementsValue}
    />;

    const factorNameInput = <input id={FactorNameId} type='text' value={factorName}/>

    return (
        <div className="App">
            <div>{`value: ${value !== null ? `${value}` : ''}`}</div>
            {/* <PlacementAutoBox
                value={placementsValue}
                setValue={setPlacementsValue}
            /> */}
            {/* {placementAutoBox} */}
            <KeywordsGroup
                value={keywordsValue}
                setValue={setKeywordsValue}
                notifyChange={handleKeywordsGroupChange}
            />
            <TargetGroup
                elements={targetGroupElements}
                placementAutoBox={placementAutoBox}
                factorNameInput={factorNameInput}
            />
        </div>
    );
}

export default App;
