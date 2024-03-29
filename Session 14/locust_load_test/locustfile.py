from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    def on_start(self):
        self.login()
        self.client.get("/#")
    
    def on_stop(self):
        self.client.get("/logout")  
    
    def login(self):
        username = "kshsiaan@gmail.com"
        password = "randompassword"
        self.client.post("/login", json={"username": username, "password": password})
    
    @task(1)
    def browse_homepage(self):
        self.client.get("/#")
