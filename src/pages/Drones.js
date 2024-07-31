import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ChildA = () => <div>Child A</div>;
const ChildB = () => <div>Child B</div>;
const ChildY = () => <div>Child Y</div>;
const ChildZ = () => <div>Child Z</div>;


class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    <ChildA />
                    <ChildB />
                    {/* Children */}
                    <ChildY />
                    <ChildZ />
                </Masonry>
            </ResponsiveMasonry>
        );
    }
}

export const Drones = () => {
    return (
        <div>
            <br />
            <br />
            <h1>Drones</h1>
            <p>Here are some of the drones I've worked on!</p>
        </div>
    );
};

export default Drones;