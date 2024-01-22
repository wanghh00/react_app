import { PlacementsId, SegmentationId, FactorNameId } from "../Util";



export default function TargetGroup({ elements, placementAutoBox, factorNameInput }) {

    const Placements = () => {
        if (elements && elements.includes(PlacementsId)) {
            return (
                <div className="SubGroup">
                    Placements:
                    {placementAutoBox}
                </div>
            );
        }
    }

    const Segmentation = () => {
        if (elements && elements.includes(SegmentationId)) {
            return (
                <div className="SubGroup">
                    Segmentation:
                </div>
            );
        }
    }


    return (
        <div className="TopGroup TargetGroup">
            {/* <input id={FactorNameId} type='text'/> */}
            {factorNameInput}
            <Placements />
            <Segmentation />
        </div>
    );
}
