import React, { Component, useState } from 'react';

export const KeywordAutoId = 'KeywordAutoId';
export const PlacementsId = 'PlacementsId';
export const SegmentationId = 'SegmentationId';
export const TreatmentNameId = 'TreatmentNameId';
export const FactorNameId = 'FactorNameId'

class Util {
    // static 
    // const [user, setUser] = useState(0);
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default Util
