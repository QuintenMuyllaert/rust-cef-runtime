//! Frontend URL resolution.

use cef::CefString;

/// Resolves the frontend URL to load.
///
/// Priority:
/// 1. CEF_DEV_URL environment variable
/// 2. assets/index.html next to the executable
pub fn resolve() -> CefString {
    if let Ok(url) = std::env::var("CEF_DEV_URL") {
        return CefString::from(url.as_str());
    }

    let exe = std::env::current_exe().unwrap();
    let dir = exe.parent().unwrap();
    let html = dir.join("assets/index.html");

    CefString::from(format!("file://{}", html.display()).as_str())
}
