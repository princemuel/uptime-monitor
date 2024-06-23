use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
  run(handler).await
}

pub async fn handler(_request: Request) -> Result<Response<Body>, Error> {
  Ok(
    Response::builder()
      .status(StatusCode::OK)
      .header("Content-Type", "application/json")
      .body(
        json!({
          "message": "Hello there!"
        })
        .to_string()
        .into(),
      )?,
  )
}
