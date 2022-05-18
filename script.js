const Units = document.querySelector('.Units');
Units.addEventListener('click', () => 
    {
        location.reload();
    });

const metric = document.querySelector('.Metric');
metric.addEventListener('click', () => 
    {
        document.querySelector('.Units').classList.remove('active');
        document.querySelector('.Metric').classList.add('active');

        document.querySelector('.h').firstElementChild.remove();
        document.querySelector('.h').lastElementChild.remove();

        //Add Height To HTML
        var node0 = document.createElement("input");                 
        node0.type = "number"
        node0.min = "0"
        node0.placeholder = "CentiMeters"
        node0.classList.add("cm");
        
        document.querySelector('.h').append(node0);  

        //Add Weight To HTML
        document.querySelector('.w').firstElementChild.remove();
        
        var node1 = document.createElement("input");                 
        node1.type = "number"
        node1.min = "0"
        node1.placeholder = "KiloGrams"
        node1.classList.add("kg");
        
        document.querySelector('.w').append(node1);  

        const calc = document.querySelector('.calculate');
        calc.addEventListener('click', () => 
            {
                //Bmi Variables
                const bmi = document.querySelector('.bmi');
                const bmiCategory = document.querySelector('.bmiCategory');
                const healthRisk = document.querySelector('.healthRisk');

                // Metric - Units Variable
                let cm = Number(document.querySelector('.cm').value);
                let kg = Number(document.querySelector('.kg').value);

                //Calculate BMI
                let bmiValue, m;

                m = cm / 100;
                bmiValue = kg / (m * m);
                bmi.value = bmiValue.toFixed(1);

                
                //Calculate BMI Category, Health Risk
                if      ( bmi.value < 18.5 )    { bmiCategory.value = "Under Weight";        healthRisk.value = "Malnutrition risk"; }
                else if ( bmi.value < 25 )      { bmiCategory.value = "Normal weight";       healthRisk.value = "Low risk";          }
                else if ( bmi.value < 30 )      { bmiCategory.value = "Over Weight";         healthRisk.value = "Enhanced risk";     }
                else if ( bmi.value < 35 )      { bmiCategory.value = "Moderately obese";    healthRisk.value = "Medium risk";       }
                else if ( bmi.value < 40 )      { bmiCategory.value = "Severely obese";      healthRisk.value = "High risk";         }
                else if ( bmi.value >= 40 )     { bmiCategory.value = "Very severely obese"; healthRisk.value = "Very high risk";    }
            });

        const reset = document.querySelector(".reset");
        reset.addEventListener("click", () => 
            {
                //Bmi Variables
                const bmi = document.querySelector('.bmi').value = "";
                const bmiCategory = document.querySelector('.bmiCategory').value = "";
                const healthRisk = document.querySelector('.healthRisk').value = "";
            
                 // Metric - Units Variable
                 const cm = document.querySelector('.cm').value = "";
                 const kg = document.querySelector('.kg').value = "";
            });
    });

const calc = document.querySelector('.calculate');
calc.addEventListener('click', () => 
    {
        //US / Uk - Units Variable
        let feet = Number(document.querySelector('.feet').value);
        let inches = Number(document.querySelector('.inches').value);
        let pounds = Number(document.querySelector('.pounds').value);

        //Bmi Variables
        const bmi = document.querySelector('.bmi');
        const bmiCategory = document.querySelector('.bmiCategory');
        const healthRisk = document.querySelector('.healthRisk');

        //Calculate BMI
        let bmiValue, m;

        inches += 12 * feet;
        bmiValue = 703 * pounds / (inches * inches);
        bmi.value = bmiValue.toFixed(1);

        //Calculate BMI Category, Health Risk
        if      ( bmi.value < 18.5 )    { bmiCategory.value = "Under Weight";        healthRisk.value = "Malnutrition risk"; }
        else if ( bmi.value < 25 )      { bmiCategory.value = "Normal weight";       healthRisk.value = "Low risk";          }
        else if ( bmi.value < 30 )      { bmiCategory.value = "Over Weight";         healthRisk.value = "Enhanced risk";     }
        else if ( bmi.value < 35 )      { bmiCategory.value = "Moderately obese";    healthRisk.value = "Medium risk";       }
        else if ( bmi.value < 40 )      { bmiCategory.value = "Severely obese";      healthRisk.value = "High risk";         }
        else if ( bmi.value >= 40 )     { bmiCategory.value = "Very severely obese"; healthRisk.value = "Very high risk";    }
    });

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    //Bmi Variables
    const bmi = document.querySelector('.bmi').value = "";
    const bmiCategory = document.querySelector('.bmiCategory').value = "";
    const healthRisk = document.querySelector('.healthRisk').value = "";
   
    //US / Uk - Units Variable
    const feet = document.querySelector('.feet').value = "";
    const inches = document.querySelector('.inches').value = "";
    const pounds = document.querySelector('.pounds').value = "";
});