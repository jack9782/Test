
//const
const route_list_link = "https://data.etabus.gov.hk/v1/transport/kmb/route/";
const route_link = "https://data.etabus.gov.hk/v1/transport/kmb/route/{route}/{direction}/{service_type}";
const stop_list_link = "https://data.etabus.gov.hk/v1/transport/kmb/stop";
const stop_link = "https://data.etabus.gov.hk/v1/transport/kmb/stop/{stop_id}";
const route_stop_list_link = "https://data.etabus.gov.hk/v1/transport/kmb/route-stop";
const route_stop_link = "https://data.etabus.gov.hk/v1/transport/kmb/route-stop/{route}/{direction}/{service_type}";
const eta_link = "https://data.etabus.gov.hk/v1/transport/kmb/eta/{stop_id}/{route}/{service_type}";
const stop_eta_link = "https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/{stop_id}";
const route_eta_link = "https://data.etabus.gov.hk/v1/transport/kmb/route-eta/{route}/{service_type}";

function save_star_route_eta_to_local_storage(stop_id, route, service_type, dir, seq){
    let obj = {
        stop_id: stop_id,
        route: route,
        dir: dir,
        service_type: service_type,
        seq: seq
    };

    let star_route_obj = JSON.parse(localStorage.getItem("star_route"));
    if (!star_route_obj){
        star_route_obj = [];
        star_route_obj.push(obj);
        localStorage.setItem("star_route", JSON.stringify(star_route_obj));
    }
    else {
        star_route_obj.push(obj);
        localStorage.setItem("star_route", JSON.stringify(star_route_obj));
    }
}

function remove_star_route_eta_from_local_storage(stop_id, route, service_type, dir, seq){
    let star_route_obj = JSON.parse(localStorage.getItem("star_route"));
    let new_star_route_obj = [];

    $.each(star_route_obj, function(i, v){
        if (v.stop_id == stop_id && v.route == route && v.dir == dir && v.service_type == service_type && v.seq == seq){
            // skip to add to new array
        }
        else {
            new_star_route_obj.push({
                stop_id: stop_id,
                route: route,
                dir: dir,
                service_type: service_type,
                seq: seq
            });
        }
    });
    localStorage.setItem("star_route", JSON.stringify(new_star_route_obj));
}

function get_star_image_source(stop_id, route, service_type, dir, seq){
    let star_route_obj = JSON.parse(localStorage.getItem("star_route"));
    let found = false;
    let src = "";

    $.each(star_route_obj, function(i, v){
        if (v.stop_id == stop_id && v.route == route && v.dir == dir && v.service_type == service_type && v.seq == seq){
            found = true;
            return false;
        }
    });

    if (found){
        src = "./img/starred.png";
    }
    else {
        src = "./img/star.png";
    }

    return src;
}
