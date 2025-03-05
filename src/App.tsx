import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle2, Eye, ShieldAlert, Zap, BarChart3, Car, Navigation, MapPin, AlertTriangle } from "lucide-react";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold tracking-tight">TrafficSign<span className="text-primary">AI</span></h1>
          </div>
          <nav className="flex gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <section className="py-12 md:py-24 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <Badge className="px-3 py-1 text-sm" variant="secondary">Advanced AI Technology</Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next-Gen Traffic Sign Detection
            </h2>
            <p className="text-xl text-muted-foreground">
              Our state-of-the-art AI model detects and classifies traffic signs with exceptional accuracy, 
              enhancing road safety and autonomous driving capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://demo.roboflow.com/traffic-sign-detection-qvzub/1?publishable_key=rf_RY7Mx6MowWBoOHjv0FHg" target="_blank" rel="noopener noreferrer">
                  TRY ME <Eye className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl transform perspective-1000 rotate-y-6 rotate-x-6">
              <img 
                src="https://images.unsplash.com/photo-1566288623394-377af472d81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Traffic sign detection in action" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Detection</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-black/30 text-white border-white/20">Speed Limit</Badge>
                    <Badge variant="outline" className="bg-black/30 text-white border-white/20">Stop Sign</Badge>
                    <Badge variant="outline" className="bg-black/30 text-white border-white/20">Yield</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 backdrop-blur-xl rounded-full flex items-center justify-center animate-pulse">
              <span className="font-bold text-primary">99.8%</span>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="features" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Advanced Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our traffic sign detection model combines cutting-edge computer vision with deep learning to deliver exceptional performance.
            </p>
          </div>

          <Tabs defaultValue="features" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="features" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Real-time Detection</CardTitle>
                    <CardDescription>
                      Process video streams in real-time with minimal latency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Our model can process up to 60 frames per second on standard hardware, making it suitable for real-time applications like autonomous driving and driver assistance systems.</p>
                  </CardContent>
                </Card>

                <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                    <CardTitle>High Accuracy</CardTitle>
                    <CardDescription>
                      99.8% accuracy across all traffic sign categories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Trained on a diverse dataset of over 100,000 images from different countries, lighting conditions, and weather scenarios to ensure reliable detection in all environments.</p>
                  </CardContent>
                </Card>

                <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
                    <CardTitle>Comprehensive Coverage</CardTitle>
                    <CardDescription>
                      Detects and classifies over 300 different traffic signs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>From standard regulatory signs to regional variations, our model has been trained to recognize virtually all traffic signs used in major countries worldwide.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <BarChart3 className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Benchmark Results</CardTitle>
                    <CardDescription>
                      Industry-leading performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">mAP (Mean Average Precision)</span>
                        <span className="text-sm font-medium">98.7%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "98.7%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Recall</span>
                        <span className="text-sm font-medium">97.5%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "97.5%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">F1 Score</span>
                        <span className="text-sm font-medium">98.1%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "98.1%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Inference Time</span>
                        <span className="text-sm font-medium">16ms</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-green-500 rounded-full h-2" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <ShieldAlert className="h-8 w-8 text-amber-500 mb-2" />
                    <CardTitle>Environmental Robustness</CardTitle>
                    <CardDescription>
                      Performance across challenging conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Low Light</span>
                        <span className="text-sm font-medium">96.3%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "96.3%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Rain/Snow</span>
                        <span className="text-sm font-medium">94.8%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "94.8%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Partial Occlusion</span>
                        <span className="text-sm font-medium">92.5%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "92.5%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Motion Blur</span>
                        <span className="text-sm font-medium">95.2%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: "95.2%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-primary">YOLOv8</span>
                    </div>
                    <CardTitle>Advanced Architecture</CardTitle>
                    <CardDescription>
                      Built on state-of-the-art object detection framework
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Our model utilizes a modified YOLOv8 architecture with custom enhancements for traffic sign detection, optimizing both speed and accuracy for real-world applications.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-primary">TF/PT</span>
                    </div>
                    <CardTitle>Multi-Framework Support</CardTitle>
                    <CardDescription>
                      Compatible with TensorFlow and PyTorch
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Deploy our model using your preferred deep learning framework. We provide optimized implementations for both TensorFlow and PyTorch to suit your existing infrastructure.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-primary">ONNX</span>
                    </div>
                    <CardTitle>Edge Deployment</CardTitle>
                    <CardDescription>
                      Optimized for mobile and embedded devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Our model can be deployed on edge devices with ONNX Runtime, TensorRT, or TFLite, with quantized versions available for resource-constrained environments.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-12" />

        <section id="how-it-works" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our traffic sign detection model uses a sophisticated pipeline to identify and classify traffic signs in various conditions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border"></div>
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg relative">
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    <h3 className="text-xl font-bold mb-2">Input Processing</h3>
                    <p className="text-muted-foreground mb-4">
                      The model accepts various input formats including images, video streams, and camera feeds. Input is preprocessed to normalize lighting, contrast, and resolution.
                    </p>
                    <div className="flex gap-2">
                      <Badge>Image Normalization</Badge>
                      <Badge>Color Correction</Badge>
                      <Badge>Resolution Scaling</Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-2xl text-primary">1</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-2xl text-primary">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 order-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    <h3 className="text-xl font-bold mb-2">Detection & Localization</h3>
                    <p className="text-muted-foreground mb-4">
                      The core detection network identifies potential traffic signs in the image and provides bounding box coordinates with confidence scores.
                    </p>
                    <div className="flex gap-2">
                      <Badge>Object Detection</Badge>
                      <Badge>Bounding Box Prediction</Badge>
                      <Badge>Confidence Scoring</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg relative">
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    <h3 className="text-xl font-bold mb-2">Classification</h3>
                    <p className="text-muted-foreground mb-4">
                      Each detected sign is classified into one of 300+ categories with associated probability scores, identifying the exact type of traffic sign.
                    </p>
                    <div className="flex gap-2">
                      <Badge>Multi-class Classification</Badge>
                      <Badge>Hierarchical Categories</Badge>
                      <Badge>Confidence Thresholding</Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-2xl text-primary">3</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-2xl text-primary">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 order-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    <h3 className="text-xl font-bold mb-2">Post-processing & Output</h3>
                    <p className="text-muted-foreground mb-4">
                      Results are refined using non-maximum suppression and tracking algorithms, then formatted for integration with downstream applications.
                    </p>
                    <div className="flex gap-2">
                      <Badge>NMS Filtering</Badge>
                      <Badge>Temporal Tracking</Badge>
                      <Badge>API Integration</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="use-cases" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our traffic sign detection technology powers a wide range of applications across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <CardHeader>
                <Car className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Autonomous Vehicles</CardTitle>
                <CardDescription>
                  Enhancing self-driving capabilities with reliable traffic sign recognition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time sign detection for navigation and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integration with vehicle control systems for automated responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Redundant verification for safety-critical decisions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <CardHeader>
                <Navigation className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Advanced Driver Assistance</CardTitle>
                <CardDescription>
                  Supporting human drivers with intelligent sign recognition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Speed limit alerts and warnings for driver awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Stop sign and traffic light detection for collision avoidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lane guidance based on road signage information</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Smart City Infrastructure</CardTitle>
                <CardDescription>
                  Enhancing urban planning and traffic management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated sign inventory and maintenance scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Traffic flow optimization based on signage compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integration with smart traffic lights and dynamic signage</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <CardHeader>
                <ShieldAlert className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Road Safety Analysis</CardTitle>
                <CardDescription>
                  Improving safety through data-driven insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Identification of high-risk areas with inadequate signage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Compliance monitoring and enforcement assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Accident prevention through early warning systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="py-12 bg-card rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Experience the Future?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Try our traffic sign detection model now and see the power of AI in action.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="animate-pulse" asChild>
              <a href="https://demo.roboflow.com/traffic-sign-detection-qvzub/1?publishable_key=rf_RY7Mx6MowWBoOHjv0FHg" target="_blank" rel="noopener noreferrer">
                TRY ME NOW <Eye className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold">TrafficSign<span className="text-primary">AI</span></h2>
            </div>
            <div className="flex gap-8">
              <div className="space-y-2">
                <h3 className="font-medium">Product</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Company</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Legal</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Licenses</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 TrafficSignAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;