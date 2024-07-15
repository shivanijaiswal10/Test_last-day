package api_testing;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;


public class wallet {

    private String baseUrl = "https://app.beeceptor.com/mock-server/crypto-wallet-server";

  @Test
    public void registerUserAndCreateWallet() {
        String endpoint = "/register";
        String requestBody = "{ \"username\": \"testuser\", \"password\": \"testpassword\" }";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .contentType("application/json")
                .body(requestBody)
                .post(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Extract wallet details or session token if needed
    }
    @Test
    public void loginUserAndGenerateToken() {
        String endpoint = "/login";
        String requestBody = "{ \"username\": \"testuser\", \"password\": \"testpassword\" }";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .contentType("application/json")
                .body(requestBody)
                .post(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Extract session token
    }
    @Test
    public void retrieveWalletBalance() {
        String endpoint = "/wallet/balance";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .get(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Extract and validate wallet balance
    }
    @Test
    public void transferEthToRecipient() {
        String endpoint = "/wallet/transfer";
        String requestBody = "{ \"recipient\": \"recipientId\", \"amount\": 5 }";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .contentType("application/json")
                .body(requestBody)
                .post(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Verify transaction details
    }
    @Test
    public void calculateTransactionFees() {
        String endpoint = "/transaction/fees";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .get(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Extract and verify transaction fees
    }
    @Test
    public void getCurrencyExchangeRates() {
        String endpoint = "/exchange/rates";

        Response response = RestAssured.given()
                .baseUri(baseUrl)
                .get(endpoint);

        // Add assertions to validate response
        response.then().statusCode(200);
        // Extract and verify exchange rates
    }

}