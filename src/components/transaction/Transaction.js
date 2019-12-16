import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div class="row mt">
            <div class="col-lg-12">
                <div class="form-panel">
                    <form action="#" class="form-horizontal style-form">
                        <div class="form-group">
                            <label class="control-label col-md-3">Default Datepicker</label>
                            <div class="col-md-3 col-xs-11">
                                <input class="form-control form-control-inline input-medium default-date-picker" size="16" type="text" value="" />
                                <span class="help-block">Select date</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3">Start with years viewMode</label>
                            <div class="col-md-3 col-xs-11">
                                <div data-date-viewmode="years" data-date-format="dd-mm-yyyy" data-date="01-01-2014" class="input-append date dpYears">
                                    <input type="text" readonly="" value="01-01-2014" size="16" class="form-control" />
                                    <span class="input-group-btn add-on">
                                        <button class="btn btn-theme" type="button"><i class="fa fa-calendar"></i></button>
                                    </span>
                                </div>
                                <span class="help-block">Select date</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3">Months Only</label>
                            <div class="col-md-3 col-xs-11">
                                <div data-date-minviewmode="months" data-date-viewmode="years" data-date-format="mm/yyyy" data-date="01/2014" class="input-append date dpMonths">
                                    <input type="text" readonly="" value="01/2014" size="16" class="form-control" />
                                    <span class="input-group-btn add-on">
                                        <button class="btn btn-theme" type="button"><i class="fa fa-calendar"></i></button>
                                    </span>
                                </div>
                                <span class="help-block">Select month only</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3">Date Range</label>
                            <div class="col-md-4">
                                <div class="input-group input-large" data-date="01/01/2014" data-date-format="mm/dd/yyyy">
                                    <input type="text" class="form-control dpd1" name="from" />
                                    <span class="input-group-addon">To</span>
                                    <input type="text" class="form-control dpd2" name="to" />
                                </div>
                                <span class="help-block">Select date range</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Transaction;