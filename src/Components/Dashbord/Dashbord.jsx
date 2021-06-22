import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bar } from 'react-chartjs-2';

import './Dashbord.css'

import Barchart from '../../Image/barcharts.png'

const Dashbord = () => {
    const data = {
        labels: ['Html', 'Css', 'Js', 'React', 'Bootstrap'],
        datasets: [
            {
                label: 'Activity',
                data: ['95', '90', '50', '75', '95'],
                fill: true,
                backgroundColor: ['#ff0066', '#81d5ff', '#ffccff', '#33ccff', '#81d5ff'],
                response: true,
                
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <div className="contaner-body">
                <div className="slidebar">
                    <ul>
                                                   
                            <NavLink activeClassName="active-link" exact to="/dashboard"> <i class="fab fa-dashcube"></i> Dashboard</NavLink >
                        
                                                  
                            <NavLink activeClassName="active-link" to="/balance"><i class="fas fa-money-check-alt"></i> Balance</NavLink >
                       
                                                  
                            <NavLink activeClassName="active-link" to="/invoice"><i className="far fa-envelope-open"></i> Invoice</NavLink >
                       
                                                   
                            <NavLink activeClassName="active-link" to="/card"><i className="fas fa-credit-card"></i> Card</NavLink >
                       
                                                  
                            <NavLink activeClassName="active-link" to="/histry"> <i className="fa fa-history"></i> History</NavLink >
                       
                                                    
                            <NavLink activeClassName="active-link" to="/details"><i className="fa fa-info-circle"></i> Details</NavLink >
                        

                    </ul>
                </div>
                <div className="main-body">
                    <div className="title">
                        <span className="greeting">Hii Robert,</span>
                        <h2>Overview</h2>
                    </div>
                    <div className="cards">
                        <div className="row row-1">
                            <div className="col">
                                <div className="balance-card">
                                    <h3 className="cardtitle">Balance</h3>
                                    <h2 className="blance">$ 548832.55</h2>
                                    <span className="balancestatus">+15%</span>
                                    <img src={Barchart} alt="" style={{ width: '50px', height: '50px' }} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="latest-activity">
                                    <h3 className="cardtitle">Latest Activity</h3>
                                    <Bar data={data} options={options} width={30} height={10} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="debit-card">
                                    <h3 className="cardtitle">My Card</h3>
                                    <h3 className="cardnumber">1234 6669 5236 8974</h3>
                                    <h3 className="cardholder">Robet Downeys</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row row-2">
                            <div className="col">
                                <div className="total-invoice">
                                    <h3 className="cardtitle">Total invoce</h3>
                                    <span className="t-i">520</span>
                                    <span className="status">+12%</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="paid-invoice">
                                    <h3 className="cardtitle">Total invoce</h3>
                                    <span className="p-i">520</span>
                                    <span className="status">85% <i className="fa fa-chart-line"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="unpaid-invoice">
                                    <h3 className="cardtitle">Total invoce</h3>
                                    <span className="u-i">520</span>
                                    <span className="status">+15% <i className="fa fa-chart-line"></i></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="invoice-sent">
                                    <h3 className="cardtitle">Total invoce</h3>
                                    <span className="i-s">520</span>
                                    <span className="status">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord
