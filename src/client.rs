//! Browser client implementation.

use cef::*;
use cef::rc::*;

wrap_client! {
    pub struct DemoClient;
    impl Client {}
}
