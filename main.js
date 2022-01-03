
 var submit = document.getElementById("submit");
window.pt_name;
window.user; 

submit.onclick = function(){
	window.pt_name = document.getElementById("pt_name").value;
  window.user = document.getElementById("user").value;
  console.log(window.pt_name, window.user)
  // console.log(pt_name, user)
}

var viz;

        function draw() {
            var config = {
                container_id: "viz",
                server_url: "bolt://localhost:7687",
                server_user: "neo4j",
                server_password: "1234",
                labels: {

                  "Character": {
                    "caption": "p.name",

                    "title_properties": [
                        "p.name"
                   ]              
                          }
                           },
                relationships: {
               },

                

              // initial_cypher: "MATCH (n)  RETURN (n) limit 5"
               //initial_cypher: "MATCH r=(p:Patient)-[:takes|:has_allergy|:Has_Encounter|:belongs_to]->() where p.name CONTAINS 'María Soledad68' RETURN r"
               //initial_cypher:"MATCH r=(p:Patient)-[:has_allergy]->()  where p.name CONTAINS 'María Soledad68' RETURN r"
              // initial_cypher:"MATCH r = (p:Patient)-[:has_alleries |:allergy ]->() where p.name CONTAINS 'Isabel214' RETURN r"
              initial_cypher: "MATCH n = (p:Patient {name: 'Jimmie93'})-[r]->(a) RETURN *"
              };
 
            
            //rendering object 
            viz = new NeoVis.default(config);
            
            viz.render();
        }

