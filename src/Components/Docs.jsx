import React from 'react';
import alk from '../images/alkhawarizmi.png';
import maxwell from '../images/maxwell.png';
import lab from '../images/lab.png';
import imgcol from '../images/imgcol.png';
import arch from '../images/arch.png';
import table from '../images/table.png';
import sc from '../images/sc.png';
import fc from '../images/fc.png';

export default function Docs() {
    return(
        <div id="docs">
            <h1>Documentation.</h1>
            <div className='section'>
                <h2>Muhammad ibn Musa al-Khwarizmi: The Father of Algebra and Inspiration for AI</h2>
                <p>This work is a tribute to Muhammad ibn Musa al-Khwarizmi, a Persian polymath born around 780 CE, stands as one of the most influential figures in the history of mathematics and science. His groundbreaking works on algebra, algorithms, astronomy, and geography laid the foundation for much of our modern understanding of these fields. In the realm of mathematics, al-Khwarizmi's contributions are particularly profound. His seminal treatise, "Al-Jabr wa'l-Muqabalah" (The Compendious Book on Calculation by Completion and Balancing), introduced the concept of the zero and developed a systematic method for solving algebraic equations. This work not only revolutionized the study of algebra but also introduced the world to the concept of algorithms, giving rise to the term "algorithm" itself.

                Al-Khwarizmi's impact on the development of artificial intelligence (AI) is perhaps less directly evident but no less profound. His emphasis on systematic problem-solving, pattern recognition, and the application of mathematics to practical problems aligns closely with the core principles of AI. The algorithms that underpin modern AI systems, from machine learning to natural language processing, draw upon the same mathematical foundations that al-Khwarizmi established.

                In naming your project on AI-powered grayscale image colorization after al-Khwarizmi, you are honoring a true pioneer of mathematical thought and recognizing his enduring legacy in the field of artificial intelligence. His work continues to inspire and inform the development of AI systems that are transforming our world.</p>
            <img src={alk} />
            <span>Figure 1: An imaginary image of Alkhawarizmi</span>
            </div>
            <div className="section">
                <h2>Image colorization: A door to the past</h2>
                <p>The history of image colorization usingAI is a fascinating journey that showcases the remarkable progress made in 
                    computer vision and artificial intelligence. From early manual techniques to sophisticated deep learning models,
                    the ability to restore color to monochrome images has transformed our understanding and appreciation of historical 
                    artifacts and cultural heritage.</p>
                    <h4>Early Approaches: Manual Colorization</h4>
                    <p>The earliest attempts at colorizing grayscale images relied on manual techniques, often involving artists carefully blending colors to match the scene depicted in the photograph. This laborious process was time-consuming and limited in its ability to capture the nuances of real-world environments.</p>
                    <h4>Hand-Crafted Features and Heuristics</h4>
                    <p>In the 1970s and 1980s, computer scientists began developing algorithms for automatic image colorization. These early approaches employed hand-crafted features and heuristics to assign colors to grayscale images. While these algorithms made significant strides, they often produced unnatural or inaccurate results due to the limitations of the handcrafted features.</p>
            
            
            
            
            <img src={maxwell} />
            <span>Figure 2: The history of Colorizing black and white images</span>
            </div>
            <div className="section">
                <h2>Related work</h2>
                <p>In the realm of grayscale image colorization, the complexity of the task necessitates judicious resource allocation. Given the computational demands inherent in such projects, a strategic decision is made to adopt a pre-trained model, leading us to Richard Zhang's seminal work, "Colorful Image Colorization." Published at ECCV 2016, this deep learning model relies on a "paired image colorization" technique, leveraging datasets with grayscale-color image pairs. Demonstrating high fidelity, versatility across image types, and computational efficiency, the model serves as a robust foundation. Our subsequent work builds upon this model, incorporating architectural enhancements and a novel loss function inspired by Johnson et al. (2016), aiming to refine and advance automatic grayscale image colorization. The decision to utilize this project is driven not only by its quality but also by the demanding computational requirements, emphasizing the importance of a robust computer setup and reliable internet access for data acquisition. </p>
            </div>
            <div className="section">
                <h2>Preprocessing the images</h2>
                <p>Almost every colorized image uses the fame RGB (Red, Green, Blue) format, which technically consists of three main channels, A channel (values between -127 [bluish green] to 128 [pinkish magenta], B channel (with values between -127 [blue] to 128 [yellow]) and L channel (having values between 00 and 100) and L stands for lightness, but, the idea of the project is to convert the random RGB images to LAB, in other words we delete A and B channels from our dataset and we try to predict them using only the L channel.</p>
                <img src={lab} />
                <span>Figure 3: LAB format</span>
                </div>
                <div className="section">
                    <h2>Approach</h2>
                    <p>Richard Zhang and his team trained a Convolutional Neural Network (CNN) system to map from a grayscale input image (Lightness only) to a distribution over qualtized color value outputs using the architecture shown in Figure 4, the model will take the grayscale image that has one component (Lightness) from LAB format and try to predict A and B and concatenate the predicted values with the Lightness input value as an output, the approach uses also the probabibilities functions to predict color distribution in case having a doubt between several colors.</p>
                    <img src={imgcol} />
                    <span>Figure 4: Richard Zhang's colorizing grayscale images project architecture</span>
                    <p>The network architecture. Each conv layer refers to a block of 2 or 3 repeated
                    conv and ReLU layers, followed by a BatchNorm [30] layer. The net has no pool layers.
                    All changes in resolution are achieved through spatial downsampling or upsampling
                    between conv blocks</p>
                </div>
                <div className="section">
                    <h2>Architecture</h2>
                    <p>Given the input lightness channel to the model, the objective is to learn a mapping to the two associated color channels A and B. The team treated the problem as multinomial classifaction. Quantizing the
ab output space into bins with grid size 10 and keep the Q = 313 values which
are in-gamut</p>
<img src={arch} />
<span>Figure 5: Quantized ab color space with a grid size of 10. A total of 313 ab pairs are
in gamut. (b) Empirical probability distribution of ab values, shown in log scale. (c)
Empirical probability distribution of ab values, conditioned on L, shown in log scale.</span>
<h4>Class rebalancing</h4>
<p>The distribution of ab values in natural images is strongly biased towards values with low ab values, due to the appearance of backgrounds such as clouds,
pavement, dirt, and walls. Figure 5 shows the empirical distribution of pixels in ab space, gathered from 1.3M training images. Observe
that the number of pixels in natural images at desaturated values are orders of
magnitude higher than for saturated values. Without accounting for this, the loss function is dominated by desaturated ab values. We account for the classimbalance problem by reweighting the loss of each pixel at train time based on
the pixel color rarity. This is asymptotically equivalent to the typical approach
of resampling the training space.
</p>
                </div>
                <div className="section">
                    <h2>Paired image colorization technique</h2>
                    <p>The project could not be realized without this technique, the "paired image colorization" technique involves using a dataset consisting of paired grayscale and color images. This paired data serves as the foundation for training a colorization model. By learning from the relationships between grayscale and corresponding color images in the dataset in a supervised learning approach, the model gains the ability to generalize and apply colorization to new grayscale images. This technique leverages the paired nature of the data to capture the nuanced mappings between grayscale and color, enabling the model to produce accurate and visually pleasing colorizations across a diverse range of images.</p>
                    <h4>Accuracy, loss function and probabilities functions</h4>
                    <p>The accuracy of the "Colorful Image Colorization" project is achieved through the implementation of a robust deep learning architecture, likely involving convolutional neural networks (CNNs). The model's training is guided by a well-designed loss function that quantifies the disparity between the predicted colorized output and the ground truth color images in the paired dataset. The choice of an effective loss function is crucial for optimizing the model's performance. Additionally, the model likely incorporates probability distributions to assign confidence scores to its color predictions, allowing for a nuanced understanding of uncertainty in the colorization process. These components collectively contribute to the model's ability to produce accurate and visually appealing colorizations across a diverse range of grayscale images.</p>
                </div>
                <div className="section">
                    <h2>Evaluation</h2>
                    <p>
The evaluation of the model involves assessing its performance against benchmark datasets, likely employing metrics such as Mean Squared Error (MSE) or structural similarity index (SSIM). While the model excels in many scenarios, there may be instances of failure, particularly in complex or unconventional scenes where the learned relationships from the training data might not generalize well.</p>
                <img src={table} />
                <span>Figure 6: Colorization results on 10k images in the ImageNet validation set. AuC refers to the area under the curve of the cumulative error distribution
over ab space. Results column 2 shows the class-balanced variant of this metric.
Column 3 is the classification accuracy after colorization using the VGG-16 network. Column 4 shows results from our AMT real vs. fake test (with mean and standard error
reported, estimated by bootstrap</span>
<h4>Accuracy, Loss function and Probabilities</h4>
                <p>Understanding the limitations and potential failure cases is crucial for users to interpret the colorization results. Despite these challenges, the project aims for realism in colorization by capturing intricate details and natural color variations, showcasing its effectiveness in replicating realistic color renditions of grayscale images. The combination of evaluation methodologies, acknowledgment of failure cases, and an emphasis on realism contributes to a comprehensive understanding of the project's capabilities and potential constraints.</p>
                <img src={sc} style={{ height: '100%' }} />
                <img src={fc} style={{ height: '100%' }} />
                <span>Figure 7: Success cases vs Failure cases.</span>
                </div>
                <div className="section">
                    <h2>AlKhawarizmi AI</h2>
                    <p>AlKhawarizmi AI is a web application that is a tribute to Alkhawarizmi due to his contributions in today's algebra, algorithm and AI and uses Colorful Image Colorization project models to run the application. The project was made by Abderrazak Mahi in January 2024 for the course of Deep learning At Universidade Aberta in Portugal. Please reach out on Github or my Portfolio.</p>
                </div>
                <div className="section">
                    <h2>References</h2>
                    <p><a href='https://en.wikipedia.org/wiki/Al-Khwarizmi'>Al khawarizmi - Wikipedia</a></p>
                    <p><a href='https://richzhang.github.io/colorization/resources/colorful_eccv2016.pdf'>Colorful Image Colorization project PDF reasearch paper </a></p>
                    <p><a href='https://richzhang.github.io/colorization/'>Colorful Image Colorization project reasearch paper Github</a></p>
                    <p><a href='https://www.youtube.com/watch?v=4xoTD58Wt-0'>Colorful Image Colorization (Oct 2016, ECCV) Youtube presentation by Richard Zhang</a></p>
                    <p><a href='https://github.com/richzhang/colorization'>Colorful Image Colorization project Github repository</a></p>
                </div>
        </div>
    )
}