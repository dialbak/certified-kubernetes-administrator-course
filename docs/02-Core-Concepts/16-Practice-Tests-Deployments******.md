# Practice Test - Deployments

- Take me to [Practice Test](https://kodekloud.com/topic/practice-tests-deployments/)

Solutions to the deployments practice test

1. <details>
   <summary>How many pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods (if any)

   </details>

1. <details>
   <summary>How many ReplicaSets exist on the system?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>

1. <details>
   <summary>How many Deployments exist on the system?</summary>

   ```bash
   kubectl get deployments
   ```

   Count the number of Deployments  (if any)

   </details>

1. <details>
   <summary>How many Deployments exist on the system now?</summary>

   ```bash
   kubectl get deployments
   ```

   Count the number of Deployments  (if any)

   </details>

1. <details>
   <summary>How many ReplicaSets exist on the system now?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>

1. <details>
   <summary>How many Pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods  (if any)

   </details>

1. <details>
   <summary>Out of all the existing PODs, how many are ready?</summary>

   From the output of the previous command, check the `READY` column
   </details>

1. <details>
   <summary>What is the image used to create the pods in the new deployment?</summary>

   ```
   kubectl describe deployment
   ```

   Look under the containers section.

   Another way - run the following and check the `IMAGES` column

   ```
   kubectl get deployment -o wide
   ```
   </details>

1. <details>
   <summary>Why do you think the deployment is not ready?</summary>

   ```
   kubectl describe pods
   ```

   Look under the events section.
   </details>

1. <details>
   <summary>Create a new Deployment using the deployment-definition-1.yaml file located at /root/.</br>There is an issue with the file, so try to fix it.</summary>

   ```
   kubectl create -f deployment-definition-1.yaml
   ```

   Note the error

   Edit the file with `vi`...

   The value for **`kind`** is incorrect. It should be **`Deployment`** with a capital **`D`**. Update the deployment
   definition and create the deployment with the above command.

   </details>

1. <details>
   <summary>Create a new Deployment with the below attributes using your own deployment definition file.</summary>

   Create a deployment definition file in `vi`, e.g. `my-deployment.yaml` with the following

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: httpd-frontend
      name: httpd-frontend
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: httpd-frontend
      template:
        metadata:
          labels:
            app: httpd-frontend
        spec:
          containers:
          - image: httpd:2.4-alpine
            name: httpd
    ```

   ```
   kubectl create -f my-deployment.yaml
   ```

   Or we could create it imperatively...

   ```
   kubectl create deployment httpd-frontend --image=httpd:2.4-alpine --replicas=3
   ```
   </details>

Certification Tip!

Here's a tip!

As you might have seen already, it is a bit difficult to create and edit YAML files. Especially in the CLI. During the
exam, you might find it difficult to copy and paste YAML files from browser to terminal. Using the kubectl run command
can help in generating a YAML template. And sometimes, you can even get away with just the kubectl run command without
having to create a YAML file at all. For example, if you were asked to create a pod or deployment with specific name and
image you can simply run the kubectl run command.

Use the below set of commands and try the previous practice tests again, but this time try to use the below commands
instead of YAML files. Try to use these as much as you can going forward in all exercises

Reference (Bookmark this page for exam. It will be very handy):

https://kubernetes.io/docs/reference/kubectl/conventions/

- Create an NGINX Pod

```kubectl run nginx --image=nginx```

- Generate POD Manifest YAML file (-o yaml). Don't create it(--dry-run)

```kubectl run nginx --image=nginx --dry-run=client -o yaml```

- Create a deployment

```kubectl create deployment --image=nginx nginx```

- Generate Deployment YAML file (-o yaml). Don't create it(--dry-run)

```kubectl create deployment --image=nginx nginx --dry-run=client -o yaml```

Generate Deployment YAML file (-o yaml). Don't create it(--dry-run) with 4 Replicas (--replicas=4)

```kubectl create deployment --image=nginx nginx --dry-run=client -o yaml > nginx-deployment.yaml```

Save it to a file, make necessary changes to the file (for example, adding more replicas) and then create the deployment.

```kubectl create -f nginx-deployment.yaml```

OR

In k8s version 1.19+, we can specify the --replicas option to create a deployment with 4 replicas.

```kubectl create deployment --image=nginx nginx --replicas=4 --dry-run=client -o yaml > nginx-deployment.yaml``` 
