import React from 'react'
import yarnList from '../resources/yarnList.json'

const Materials = () => {
    return (
        <div>
            <h1>Materials</h1>
            {
                yarnList.map((yarn) => (
                    <div key={yarn.id}>
                        <p>{yarn.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Materials