use rust_cef_runtime::Runtime;
use cef::CefString;

fn main() {
    Runtime::run(CefString::from("app://app/content/index.html"));
}
