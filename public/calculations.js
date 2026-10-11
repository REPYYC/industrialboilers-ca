export const waterDuty=(flow,delta)=>flow*4.186*delta/60;
export const boilerHorsepower=bhp=>({kw:bhp*9.8095,btu:bhp*9.8095*3600000/1055.05585262});
export const fuelComparison=(load,hours,baseline,scenario)=>{const useful=load*hours*.0036;const before=useful/(baseline/100),after=useful/(scenario/100);return {before,after,difference:before-after,percent:(before-after)/before*100};};
