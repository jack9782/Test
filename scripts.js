
function save_star_route_eta_to_local_storage(route, dir, service_type, seq){
    let obj = {
        route: route,
        dir: dir,
        service_type: service_type,
        seq: seq
    };

    console.log(localStorage.getItem("star_route"));

}

function remove_star_route_eta_from_local_storage(){
    console.log(localStorage.getItem("star_route"));
}