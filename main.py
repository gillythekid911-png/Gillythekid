from firebase_functions import https_fn
from firebase_admin import initialize_app

# Initialize Firebase
initialize_app()

@https_fn.on_request()
def ai_prompt(req: https_fn.Request) -> https_fn.Response:
    data = req.get_json(silent=True) or {}
    prompt = data.get("prompt", "No prompt provided")
    return https_fn.Response(f"Backend received: {prompt}")

