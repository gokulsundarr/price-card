import React from 'react'
import"../style/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <div>
      <section class="pricing py-5">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">McAfee</h5>
                            <h6 class="card-price text-center">₹1199<span class="period">/year</span></h6>
                            <hr></hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>3 device</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Firewall</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>email security</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>ransomware protection</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>low-coat introductory pricing</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>24/7 customer support</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>includes vpn</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>offers plan on unlimited devices</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Buy</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">Kaspersky</h5>
                            <h6 class="card-price text-center">₹1919<span class="period">/year</span></h6>
                            <hr></hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 devices</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Firewall</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>email security</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>ransomware protection</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Include desktop and mobile protection</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Password manager for each user</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>small business to enterprise level</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>customized plans</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Buy</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">Avira</h5>
                            <h6 class="card-price text-center">₹2014<span class="period">/year</span></h6>
                            <hr></hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 devices</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Firewall</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>email security</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>ransomware protection</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Renewal price increase</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Include vpn and email security</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Monthly</strong> /annual plans</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Blocks threats and repairs files in real time</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
