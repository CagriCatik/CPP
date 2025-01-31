#include <iostream>

// Function declarations (prototype)
void showMenu();
void readData();
void simulateError();

int main() {
    // First Program Output
    std::cout << "Welcome to the Automotive Diagnostic Simulator!" << std::endl;

    // Basic Menu System
    int choice = 0;
    while (choice != 3) {
        showMenu();
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case 1:
                readData();  // Simulate reading data
                break;
            case 2:
                simulateError();  // Simulate a runtime error
                break;
            case 3:
                std::cout << "Exiting the program. Goodbye!" << std::endl;
                break;
            default:
                std::cout << "Invalid choice. Please try again." << std::endl;
        }
    }

    return 0;
}

void showMenu() {
    std::cout << "\n--- Menu ---" << std::endl;
    std::cout << "1. Read Engine Data" << std::endl;
    std::cout << "2. Simulate Error" << std::endl;
    std::cout << "3. Exit" << std::endl;
}

void readData() {
    int speed;
    double temperature;

    // Simple input/output example
    std::cout << "Enter engine speed (RPM): ";
    std::cin >> speed;

    std::cout << "Enter engine temperature (Celsius): ";
    std::cin >> temperature;

    // Display data
    std::cout << "\nEngine Data:" << std::endl;
    std::cout << "Speed: " << speed << " RPM" << std::endl;
    std::cout << "Temperature: " << temperature << " °C" << std::endl;

    // Logic error simulation: Incorrect threshold check
    if (temperature > 150) {
        std::cout << "Warning: Engine overheating!" << std::endl;  // Correct warning
    } else if (temperature > 90) {
        std::cout << "All systems are normal." << std::endl;  // Logic error: condition is flawed
    }
}

void simulateError() {
    // Example of runtime error
    int value;
    std::cout << "Enter a number (0 to trigger division by zero error): ";
    std::cin >> value;

    if (value == 0) {
        std::cout << "Error: Division by zero detected!" << std::endl;
        return;
    }

    std::cout << "Result: " << 100 / value << std::endl;
}
