let dashboard = document.getElementById("dashboard");
let dashboard = document.getElementById("incomes");
let dashboard = document.getElementById("spendings");
let dashboard = document.getElementById("settings");

let main_dashboard = document.getElementById("main-dashboard");
let main_incomes = document.getElementById('main_incomes')

dashboard.addEventListener('click', function(){
    
    main_dashboard.style.display = 'block';
    dashboard.style.background = 'white';
    dashboard.style.color = '#865cff';
    incomes.style.background = 'white';
    incomes.style.color = '#865cff';
    spendings.style.color = '#865cff';
    spendings.style.color = 'white';
    settings.style.color = '#865cff';
    settings.style.color = 'white';
    
    main_dashboard.style.display ='block';
    main_incomes.style.display = 'none';

})
     
incomes.addEventListener('click', function(){
    
    
    dashboard.style.background = '865cff';
    dashboard.style.color = '#white';
    incomes.style.background = 'white';
    incomes.style.color = '#865cff';
    spendings.style.color = '#865cff';
    spendings.style.color = 'white';
    settings.style.color = '#865cff';
    settings.style.color = 'white';
    

    main_dashboard.style.visibility = 'none';
    main_dashboard.style.display = 'block';
})

     spendings.addEventListener('click'), function(){
        dashboard.style.background = '865cff';
    dashboard.style.color = '#white';
    incomes.style.background = 'white';
    incomes.style.color = '#865cff';
    spendings.style.background = '#865cff';
    spendings.style.color = 'white';
    settings.style.background = '#865cff';
    settings.style.color = 'white';
   }
    


incomes.addEventListener('click', function(){
    dashboard.style.background = '865cff';
    dashboard.style.color = '#white';
    incomes.style.background = '865cff';
    incomes.style.color = '#white';
    spendings.style.background = '#865cff';
    spendings.style.color = 'white';
    settings.style.backgroud = '#white';
    settings.style.color = '865cff';
})