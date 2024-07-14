
window.addEventListener("load", Start);
async function Start()
{
    if("serviceWorker" in navigator)
    {
        try
        {
            let registration = await navigator.serviceWorker.register("service-worker.js");
            console.log("Service Worker registered with scope:", registration.scope);
        }
        catch(error)
        {
            console.error(error);
        }
    }
    else
    {
        console.log("Service workers are not supported in this browser.")
    }
}