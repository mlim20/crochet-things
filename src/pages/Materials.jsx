import React from 'react'
import yarnList from '../resources/yarnList.json'
import hooksList from '../resources/hooksList.json'
import toolsList from '../resources/toolsList.json'
import './Pages.css'

const Materials = () => {
    return (
        <div>
            {/* TODO: Add notes */}
            <div className="materials-section">
                <h1>Yarn</h1>
                <div className="materials-grid">
                    {
                        yarnList.map((yarn) => (
                            <div className="material-item" key={yarn.id}>
                                <p className="material-label name">{yarn.name}</p>
                                <p className="material-label subtitle">({yarn.colour})</p>
                                <img className="material-image" src={yarn.imagePath} alt="(image error)"></img>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="materials-section">
                <h1>Hooks</h1>
                <div className="materials-grid">
                    {
                        hooksList.map((hook) => (
                            <div className="material-item" key={hook.id}>
                                <p className="material-label name">{hook.name}</p>
                                <p className="material-label subtitle">Size: {hook.size}</p>
                                <img className="material-image" src={hook.imagePath} alt="(image error)"></img>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="materials-section">
                <h1>Other</h1>
                <div className="materials-grid">
                    {
                        toolsList.map((tool) => (
                            <div className="material-item" key={tool.id}>
                                <p className="material-label name">{tool.name}</p>
                                <img className="material-image" src={tool.imagePath} alt="(image error)"></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Materials