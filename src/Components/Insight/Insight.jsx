import React from 'react'
import './Insight.css'

const Insight = () => {
  return (
    <div>
        <div className="insight">
            <div className="insight_container">
                <div className="insight_list">
                    <h2>16,000</h2>
                    <p>Investment Managed</p>
                </div>
                <hr />
                <div className="insight_list">
                    <h2>20,000</h2>
                    <p>Wealth Created</p>
                </div>
                <hr />
                <div className="insight_list">
                    <h2>15,000</h2>
                    <p>Asset Management</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insight