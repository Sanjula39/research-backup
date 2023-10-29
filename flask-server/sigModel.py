import cv2
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

# Data Preprocessing
image_height, image_width = 128, 128
num_channels = 3  # Assuming color images (adjust accordingly for grayscale)


def load_images(directory):
    images = []
    for filename in os.listdir(directory):
        img_path = os.path.join(directory, filename)
        image = cv2.imread(img_path)
        image = cv2.resize(image, (image_height, image_width))
        images.append(image)
    return np.array(images)


genuine_images = load_images('dataset/real/')
forged_images = load_images('dataset/forge/')

# Normalize pixel values to be between 0 and 1
genuine_images = genuine_images.astype('float32') / 255.0
forged_images = forged_images.astype('float32') / 255.0

num_genuine = genuine_images.shape[0]
num_forged = forged_images.shape[0]

y_genuine = np.zeros(num_genuine)
y_forged = np.ones(num_forged)

# Concatenate the labels
y = np.concatenate((y_genuine, y_forged), axis=0)

X = np.concatenate((genuine_images, forged_images), axis=0)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model Creation and Training
model = Sequential()
model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(image_height, image_width, num_channels)))
model.add(MaxPooling2D((2, 2)))
model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D((2, 2)))
model.add(Conv2D(128, (3, 3), activation='relu'))
model.add(MaxPooling2D((2, 2)))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
y_pred = model.predict(X_test)
y_pred = np.round(y_pred).flatten()  # Convert probabilities to binary predictions
f1 = f1_score(y_test, y_pred)

print(f'Test F1 score: {f1}')
print(f'Test loss: {loss}')
print(f'Test accuracy: {accuracy}')

# Model Export
# model.save('signature_validation_model.h5')
# print('Model saved as signature_validation_model.h5')
