/*
A bare minimum, multithreaded web server.

@author: Elias Gabriel
@revision: v1.0
*/
use std::io::prelude::*;
use std::net::TcpStream;
use std::net::TcpListener;

fn main() {
	let host = std::env::args().nth(1).expect("NO HOST GIVEN. EXPECTED <IP:PORT>");
	let listener = TcpListener::bind(host).unwrap();

	println!(" ===== barebones v1.0 ===== ");
	println!("- Server started on provided address!");
	println!("- Listening for connections...\n");

	for stream in listener.incoming() { handle_connection(stream.unwrap()); }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 512];
    stream.read(&mut buffer).unwrap();
/*	
	if buffer.starts_with(b"GET / HTTP/1.1") {
		
        ("HTTP/1.1 200 OK\r\n\r\n", "hello.html")
    } else {
        ("HTTP/1.1 404 NOT FOUND\r\n\r\n", "404.html")
    };
	}

    let contents = "<body><h1>test</h1></body>";//contents = fs::read_to_string(filename).unwrap();
    let response = format!("{}{}", status_line, contents);

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
*/
}
