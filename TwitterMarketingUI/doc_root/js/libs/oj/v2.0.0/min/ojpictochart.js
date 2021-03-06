/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtPictoChart"],function(b,f,a,d,c){b.ya("oj.ojPictoChart",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null,drill:null},mf:function(a,b,d){return c.DvtPictoChart.newInstance(a,b,d)},di:function(a){var b=a.subId;"oj-pictochart-item"==b?b="item["+a.index+"]":"oj-pictochart-tooltip"==b&&(b="tooltip");return b},dg:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-pictochart-item",b.index=
this.Sg(a)):"tooltip"==a&&(b.subId="oj-pictochart-tooltip");return b},Be:function(){var a=this._super();a.push("oj-pictochart");return a},ei:function(){var a=this._super();a["oj-pictochart-item"]={path:"_defaultColor",property:"background-color"};return a},hi:function(){return["optionChange"]},ki:function(a){var b=a&&a.getType?a.getType():null;b===c.DvtSelectionEvent.TYPE?this.hc("selection",a.getSelection()):b===c.DvtCategoryRolloverEvent.TYPE_OVER||b===c.DvtCategoryRolloverEvent.TYPE_OUT?this.hc("highlightedCategories",
a.categories):b===c.DvtDrillEvent.TYPE?this._trigger("drill",null,{id:a.getId()}):this._super(a)},getItem:function(a){return this.la.getAutomation().getItem(a)},getItemCount:function(){return this.la.getAutomation().getItemCount()},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-pictochart-tooltip"!==a.subId?a:null},gi:function(){return{root:["items"]}},Tz:function(){return!0}})});
