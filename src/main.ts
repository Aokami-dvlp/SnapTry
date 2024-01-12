import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzAyMzcyNTc2LCJzdWIiOiJmZGYxYzQ5Mi1hZTQwLTQ3MGItYjI0MS1hOWY4NTg0ZDg4MjZ-U1RBR0lOR35hNGY3MTMwOC04MjM3LTRhN2ItOTQ5MC1kMmJjMGVmNzAxODYifQ.aNsGEfchWqHNQmVjTmC44mXQC2WYR6YOr-MHffIvyXE',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '2933fec9-d89b-44b2-a98b-4f7ef59a9e77',
    '2933fec9-d89b-44b2-a98b-4f7ef59a9e77'
  );

  await session.applyLens(lens);
})();